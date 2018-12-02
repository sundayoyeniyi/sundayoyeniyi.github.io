FROM centos:7

LABEL Sunday Oyeniyi <sunday.oyeniyi@gmail.com>

RUN cd ~ \
    && yum -y --setopt=tsflags=nodocs install httpd \
    && yum -y --setopt=tsflags=nodocs update \
    && yum clean all \
    && rm -rf /var/cache/yum \
    && mkdir -p /var/www/sundayoyeniyi.herokuapp.com/public_html

COPY dist/* /var/www/sundayoyeniyi.herokuapp.com/public_html/
COPY deploy/httpd.conf /etc/httpd/conf/httpd.conf

ADD deploy/run-httpd.sh /run-httpd.sh
RUN chmod -v +x /run-httpd.sh

CMD ["/run-httpd.sh"]