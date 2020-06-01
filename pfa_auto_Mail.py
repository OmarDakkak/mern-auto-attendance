import yagmail
import os
print("sending email.....")
receiver = "abdelfettah.hajjioui@gmail.com"  # receiver email address
body = "Attendence File"  # email body
filename = "Attendance"+os.sep+"Attendance_2020-03-12_16-18-57.csv"  # attach the file


try:
    #initializing the server connection
    yag = yagmail.SMTP("ehang01.bendahan@gmail.com", "dadi2019")
    #sending the email
    yag.send(to=receiver, subject='Attendance Report', contents='Attendance Report', attachments=filename)
    print("Email sent successfully")
except:
    print("Error, email was not sent")



sys.stdout.flush()

