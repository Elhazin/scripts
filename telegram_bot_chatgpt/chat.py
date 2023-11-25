from openai import OpenAI
import logging as loggin

KEY= "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"

client = OpenAI(api_key=KEY)

def chatbot(qouestion):
    try:
        completion = client.chat.completions.create(
          model="gpt-3.5-turbo",
          messages=[
          {"role": "user", "content": qouestion}
          ]
        )
        return completion.choices[0].message.content
    except Exception as e:
        return '''
Hello! \nI am Elhazinbot. I regret to inform you that I am currently experiencing issues 
and unable to provide answers. I will be back after some time. Thank you for your understanding.\n:)
'''
