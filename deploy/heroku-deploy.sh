#!/bin/bash
heroku container:login
heroku container:push web --app sundayoyeniyi
heroku container:release web --app sundayoyeniyi