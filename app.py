from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/404")
def notf():
    return render_template("errors/404.html")
@app.route("/403")
def notd():
    return render_template("errors/403.html")
@app.route("/500")
def nots():
    return render_template("errors/500.html")
@app.errorhandler(404)
def error_404(e):
    return render_template("errors/404.html"), 404
@app.errorhandler(403)
def error_403(e):
    return render_template("errors/403.html"), 403
@app.errorhandler(500)
def error_500(e):
    return render_template("errors/500.html"), 500

app.run(host="0.0.0.0", port=5000, debug=True)
