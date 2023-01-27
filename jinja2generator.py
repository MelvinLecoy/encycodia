from jinja2 import Environment, FileSystemLoader, select_autoescape
import json, jinja2

def generate_html(input) -> None:
    env: Environment = jinja2.Environment(loader=FileSystemLoader('templates'), autoescape=select_autoescape(['html', 'xml']))
    if isinstance(input, dict):
        configs: dict = {}
        for file in input[folder := (list(input.keys())[0])]:
            with open(f"data/{folder}/{file}.json", encoding="utf-8") as data: configs[file] = json.load(data)
        rendered_html = env.get_template(folder + ".html").render(configs=configs)
        with open(folder + ".html", "w") as file: file.write(rendered_html)
    else:
        rendered_html = env.get_template(input + ".html").render()
        with open(input + ".html", "w") as file: file.write(rendered_html)
        
if __name__ == '__main__':
    inputs = ["index", {"fundamental_syntax": ["macroscopic", "microscopic", "secondary"]}, "elementary_types"]
    for input in inputs: generate_html(input)
    # generate_html("fundamental_syntax")