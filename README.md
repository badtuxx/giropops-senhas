# Executando a aplicação local

1. Clone o repositório:

```
git clone https://github.com/badtuxx/giropops-senhas.git
```

2. Entre no diretório de trabalho:

```
cd giropops-senhas
```

3. Atualizando o sistema operacional

```
sudo apt update -y
```

4. Certifique de ter o python instalado e instale o gerenciador de pacotes:

```
sudo apt-get install pip
```

5. Atualizando o projeto:

*Esse passo foi necessário, pois encontramos o seguinte erro:*

```
flask run --host=0.0.0.0
Traceback (most recent call last):
  File "/usr/local/bin/flask", line 5, in <module>
    from flask.cli import main
  File "/usr/local/lib/python3.8/dist-packages/flask/__init__.py", line 7, in <module>
    from .app import Flask as Flask
  File "/usr/local/lib/python3.8/dist-packages/flask/app.py", line 27, in <module>
    from . import cli
  File "/usr/local/lib/python3.8/dist-packages/flask/cli.py", line 17, in <module>
    from .helpers import get_debug_flag
  File "/usr/local/lib/python3.8/dist-packages/flask/helpers.py", line 14, in <module>
    from werkzeug.urls import url_quote
ImportError: cannot import name 'url_quote' from 'werkzeug.urls' (/usr/local/lib/python3.8/dist-packages/werkzeug/urls.py)
```

```
pip install --upgrade Flask
```

Ainda assim foi necessário especificar uma versão fixa para o Werkzeug: No arquivo requirements.txt, adicionando uma versão específica para o Werkzeug, como Werkzeug==2.2.2.

Isso garantirá que a versão correta do Werkzeug seja instalada e resolva o problema.

6. Instalando o Redis, uma dependência do projeto:

```
sudo apt-get install redis -y
```

7. Iniciando o Redis:

```
systemctl start redis && systemctl status redis
```

8. Instale todas as dependências do python:

```
pip install --no-cache-dir -r requirements.txt
```

9. Criando uma variável de ambiente para que a aplicação encontre o Redis:

```
export REDIS_HOST=localhost
```

10. Iniciando a aplicação:

```
flask run --host=0.0.0.0
```
