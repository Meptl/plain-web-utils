#!/bin/sh
# A script to set up this repo on AWS(Redhat)
yum update -y
yum install git httpd mod_wsgi-python27 ruby-devel gcc -y
yum-config-manager --enable epel
yum install youtube-dl -y
rmdir /var/www/html
rmdir /var/www/cgi-bin

cd /home/ec2-user
chmod 711 .
git clone https://github.com/Meptl/plain-web-utils
chown -R ec2-user:ec2-user plain-web-utils
cd plain-web-utils
jekyll build
chown -R ec2-user:apache _site

ln -s /home/ec2-user/plain-web-utils/_site/ /var/www/html
ln -s /home/ec2-user/plain-web-utils/wsgi-scripts/ /var/www/wsgi-scripts
#chcon -R -t httpd_sys_content_t /var/www/html/
#chcon -R -t httpd_sys_content_t /var/www/wsgi-scripts/

echo "WSGIScriptAlias /scripts /var/www/wsgi-scripts
<Directory /var/www/wsgi-scripts>
    Order allow,deny
    Allow from all
</Directory>" >> /etc/httpd/conf/httpd.conf
echo "httpd config modified. Restart httpd to take effect."
