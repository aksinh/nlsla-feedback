from flask import Flask, render_template, request
app = Flask(__name__)

ENTRY_POINT = ""

@app.route(ENTRY_POINT + '/', methods=['GET','POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    else:
        #  Replace to receive data with request.form.get()
        return

if __name__ == "__main__":
    app.run(debug=True)