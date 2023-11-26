FROM cgr.dev/chainguard/python:latest-dev as builder

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt --user

FROM cgr.dev/chainguard/python:latest

WORKDIR /app

#Changed the python version to 3.12
COPY --from=builder /home/nonroot/.local/lib/python3.12/site-packages /home/nonroot/.local/lib/python3.12/site-packages
#Changed to have sh available
COPY --from=builder /home/nonroot/.local/bin /home/nonroot/.local/bin
ENV PATH=$PATH:/home/nonroot/.local/bin

COPY ["tailwind.config.js", "LICENSE", "."]
COPY static/ static/
COPY templates/ templates/
COPY app.py .
ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]
