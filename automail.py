import yagmail
import glob
import os
print("sending email.....")
receiver = "omardakkak98@gmail.com"  # receiver email address
body = "Attendence File"  # email body

list_of_files = glob.glob('Attendance/*') # * means all if need specific format then *.csv
latest_file = max(list_of_files, key=os.path.getctime)


latest_file = "/".join(latest_file.split("\\")) # attach the file


# mail information
yag = yagmail.SMTP("ehang01.bendahan@gmail.com", "dadi2019")

# sent the mail
yag.send(
    to=receiver,
    subject="Attendance Report",  # email subject
    contents=body,  # email body
    attachments=latest_file,  # file attached
)

print("mail has been sent successfully")
