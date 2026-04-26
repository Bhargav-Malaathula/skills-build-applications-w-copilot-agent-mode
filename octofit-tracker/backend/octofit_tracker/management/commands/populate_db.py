from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models
from octofit_tracker import models as app_models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Clear existing data
        User.objects.all().delete()
        Team = self.get_or_create_team_model()
        Activity = self.get_or_create_activity_model()
        Leaderboard = self.get_or_create_leaderboard_model()
        Workout = self.get_or_create_workout_model()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User.objects.create_user(username='ironman', email='ironman@marvel.com', password='pass', team=marvel),
            User.objects.create_user(username='captainamerica', email='cap@marvel.com', password='pass', team=marvel),
            User.objects.create_user(username='spiderman', email='spiderman@marvel.com', password='pass', team=marvel),
            User.objects.create_user(username='batman', email='batman@dc.com', password='pass', team=dc),
            User.objects.create_user(username='superman', email='superman@dc.com', password='pass', team=dc),
            User.objects.create_user(username='wonderwoman', email='wonderwoman@dc.com', password='pass', team=dc),
        ]

        # Create activities
        activities = [
            Activity.objects.create(user=users[0], type='run', duration=30),
            Activity.objects.create(user=users[1], type='cycle', duration=45),
            Activity.objects.create(user=users[2], type='swim', duration=60),
            Activity.objects.create(user=users[3], type='run', duration=25),
            Activity.objects.create(user=users[4], type='cycle', duration=35),
            Activity.objects.create(user=users[5], type='swim', duration=50),
        ]

        # Create workouts
        workouts = [
            Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes'),
            Workout.objects.create(name='Strength Training', description='Strength for all heroes'),
        ]

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=135)
        Leaderboard.objects.create(team=dc, points=110)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))

    def get_or_create_team_model(self):
        class Team(models.Model):
            name = models.CharField(max_length=100, unique=True)
        return Team

    def get_or_create_activity_model(self):
        class Activity(models.Model):
            user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
            type = models.CharField(max_length=50)
            duration = models.IntegerField()
        return Activity

    def get_or_create_leaderboard_model(self):
        class Leaderboard(models.Model):
            team = models.ForeignKey('octofit_tracker.Team', on_delete=models.CASCADE)
            points = models.IntegerField()
        return Leaderboard

    def get_or_create_workout_model(self):
        class Workout(models.Model):
            name = models.CharField(max_length=100)
            description = models.TextField()
        return Workout
