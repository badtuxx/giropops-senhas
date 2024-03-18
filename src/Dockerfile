# Etapa de construção
FROM alpine:3.19.1 as build
COPY ./ /app
RUN apk add --no-cache python3 py3-pip && \
    python3 -m venv /app/venv && \
    source /app/venv/bin/activate && \
    pip install --no-cache-dir -r /app/requirements.txt

# Etapa final
FROM alpine:3.19.1
COPY --from=build /app /app
WORKDIR /app
ENV REDIS_HOST=localhost
RUN apk add --no-cache python3 py3-pip && \
    rm -rf /root/.cache /root/.cargo /usr/local/include /usr/local/share

# Definindo o comando principal e o argumento para o entrypoint
ENTRYPOINT ["/bin/sh", "-c", "source /app/venv/bin/activate && flask run --host=0.0.0.0"]

# Definindo o argumento padrão para o comando principal
CMD []

EXPOSE 5000
