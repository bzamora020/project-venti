import tensorflow as tf

from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pickle

def emotionTest(sentence): 
     max_length = 100
     trunc_type='post'
     padding_type='post'

     # loading model
     model = tf.keras.models.load_model('./sa_model')

     # loading tokenizer
     tokenizer = None
     with open('tokenizer.pickle', 'rb') as handle:
          tokenizer = pickle.load(handle)

     sequences = tokenizer.texts_to_sequences(sentence)
     padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
     results = model.predict(padded)
     return results

# server = []






