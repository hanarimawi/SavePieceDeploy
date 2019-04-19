<h1>Instructions:</h1>

Run frontend:

cd frontend

npm install

npm run start

<br><br>
Run backend:

in root directory create and activate the virtual environment: 

python3 -m venv venv

source activate venv/bin/activate

pip install -r requirements.txt

python manage.py runserver

<br><br>
When making changes to models and views:

python manage.py makemigrations [name of folder], for example python manage.py makemigrations restaurants

python manage.py migrate


