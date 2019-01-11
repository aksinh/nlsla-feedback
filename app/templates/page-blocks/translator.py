from googletrans import Translator
import os

#change this to the directory path to page-blocks on your computer before running
directory_in_str = "/Users/akshatsingh/Documents/nlsla-feedback/app/templates/page-blocks"

#change this to the directory path to page-blocks on your computer before running
write_directory = "/Users/akshatsingh/Documents/nlsla-feedback/app/templates/page-blocks2"
directory = os.fsencode(directory_in_str)

translator = Translator()

for file in os.listdir(directory):
	lines_of_code = []
	file_object = open(file,'r')
	file_name = str(file_object.name)
	if file_name != "b'p1.html'" and file_name != "b'translator.py'":
		for line in file_object:
			new_line = line
			if "question" in line:
				index_of_q = line.find("question")
				start_of_text = index_of_q + 10
				end_of_question = line.find("<", start_of_text)
				text = line[start_of_text:end_of_question]
				translator_obj = translator.translate(text,"es")
				text_in_spanish = translator_obj.text
				new_line = line[:start_of_text] + text_in_spanish + line[end_of_question:]
			elif "a-select-text" in line:
				index_of_a = line.find("a-select-text")
				start_of_text = index_of_a+ 15
				end_of_text = line.find("<", start_of_text)
				text = line[start_of_text:end_of_text]
				translator_obj = translator.translate(text,"es")
				text_in_spanish = translator_obj.text
				new_line = line[:start_of_text] + text_in_spanish + line[end_of_text:]
			lines_of_code.append(new_line)
		file_no = int(file_name[3])
		write_file = "p" + str(file_no + 4) + ".html"
		completeName = os.path.join(write_directory, write_file)
		f = open(completeName,"w")
		f.writelines(lines_of_code)
		f.close()
		file_object.close()










