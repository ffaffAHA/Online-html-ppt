from pathlib import Path
from revealjs_converter import MarkdownRevealjsConverter

# # Set the default encoding to utf-8
import io  
import sys 

# #改变标准输出的默认编码 
# sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='gb18030')         
# get the dir of current python file
code_dir = Path(__file__).absolute().parent

try:
    md_fname = sys.argv[1]
except:
    print("usage: python md2slide.py [markdown filename]")
    exit()

config = dict()
config["path"] = code_dir/"config.json"

converter = MarkdownRevealjsConverter(md_fname, **config) 
converter.convert()


