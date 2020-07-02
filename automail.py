import smtplib
import glob
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

email_user = 'ehang01.bendahan@gmail.com'
email_password = 'dadi2019'
email_send = 'omardakkak2106@gmail.com'

subject = 'Attendance'

msg = MIMEMultipart()
msg['From'] = email_user
msg['To'] = email_send
msg['Subject'] = subject

body = 'This is the attendance'
msg.attach(MIMEText(body,'plain'))

##
list_of_files = glob.glob('Attendance/*.csv') # * means all if need specific format then *.csv
latest_file = max(list_of_files, key=os.path.getctime)
latest_file = str(latest_file)
##
print(latest_file)

filename= latest_file
attachment  =open(filename,'rb')

part = MIMEBase('application','octet-stream')
part.set_payload((attachment).read())
encoders.encode_base64(part)
part.add_header('Content-Disposition',"attachment; filename= "+filename)

msg.attach(part)
text = msg.as_string()
server = smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login(email_user,email_password)


server.sendmail(email_user,email_send,text)
server.quit()

print("mail has been sent successfully")