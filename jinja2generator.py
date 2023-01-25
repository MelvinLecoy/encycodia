from jinja2 import Environment, FileSystemLoader, select_autoescape
import json, jinja2
import os

def generate_html(filename: str) -> None:
    env: Environment = jinja2.Environment(loader=FileSystemLoader('templates'), autoescape=select_autoescape(['html', 'xml']))
    try:
        with open("data/" + filename + ".json", encoding="utf-8") as file:
            configs = json.load(file)
            rendered_html = env.get_template(filename + ".html").render(configs=configs)
        with open(filename + ".html", "w") as file: file.write(rendered_html)
    except FileNotFoundError:
        rendered_html = env.get_template(filename + ".html").render()
        with open(filename + ".html", "w") as file: file.write(rendered_html)
if __name__ == '__main__':
    filenames: list[str] = ["index", "fundamental_syntax", "elementary_types"]
    for filename in filenames: generate_html(filename)
    # generate_html("fundamental_syntax")