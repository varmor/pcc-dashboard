from django.db import models

# model for peer counsellors data.
class PeerC(models.Model):
    first_name = models.CharField(max_length=30)
    profileP = models.ImageField(default='default.jpg', upload_to='./dashboard/profile_pics')
    last_name = models.CharField(max_length=30)
    emailID = models.EmailField()
    linkedIN = models.CharField(max_length=100)
    twitter = models.CharField(max_length=100)
    phoneNO = models.BigIntegerField()
    about = models.TextField(max_length=500)

    def __str__(self):
        return f"{self.first_name}'s Profile"

