import yagmail
import os
print("sending email.....")
receiver = "abdelfettah.hajjioui@gmail.com"  # receiver email address
body = "Attendence File"  # email body
filename = "Attendance"+os.sep+"Attendance_2020-03-12_16-18-57.csv"  # attach the file

# mail information
yag = yagmail.SMTP("ehang01.bendahan@gmail.com", "dadi2019")

# sent the mail
yag.send(
    to=receiver,
    subject="Attendance Report",  # email subject
    contents=body,  # email body
    attachments=filename,  # file attached
)

print("mail has been sent successfully")


