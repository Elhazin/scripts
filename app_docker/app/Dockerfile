FROM python:3.8-slim-buster

RUN apt-get update && pip install --upgrade pip 
RUN pip install SQLAlchemy && pip install mysql-connector-python && pip install flask --

RUN mkdir /app
COPY main.py /app/app.py
WORKDIR /app

CMD ["python", "app.py"]