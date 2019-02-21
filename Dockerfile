FROM python:3.7
ENV annotateEnv 1
RUN mkdir /annotate
WORKDIR /annotate
ADD requirements.txt /annotate/
RUN pip install -r requirements.txt
ADD . /annotate/
