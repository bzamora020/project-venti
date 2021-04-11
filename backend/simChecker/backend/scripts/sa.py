import tensorflow as tf
import csv

from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pickle

vocab_size = 10000
embedding_dim = 16
max_length = 100
trunc_type='post'
padding_type='post'
oov_tok = "<OOV>"
training_size = 16000

# Training Set
training_sentences = []
training_labels = []
with open("./datasets/train.txt", 'r') as trainingDataTXT:
    trainingDataReader = csv.reader(trainingDataTXT, delimiter=';', quotechar='|')
    for row in trainingDataReader:
        training_sentences.append(row[0])
        if (row[1] == 'sadness') or (row[1] == 'anger'):
            training_labels.append(1)
        else:
            training_labels.append(0)

# Test set
testing_sentences = []
testing_labels = []
with open("./datasets/train.txt", 'r') as testingDataTXT:
    testingDataReader = csv.reader(testingDataTXT, delimiter=';', quotechar='|')
    for row in testingDataReader:
        testing_sentences.append(row[0])
        if (row[1] == 'sadness') or (row[1] == 'anger'):
            testing_labels.append(1)
        else:
            testing_labels.append(0)


tokenizer = Tokenizer(num_words=vocab_size, oov_token=oov_tok)
tokenizer.fit_on_texts(training_sentences)

# saving
with open('tokenizer.pickle', 'wb') as handle:
    pickle.dump(tokenizer, handle, protocol=pickle.HIGHEST_PROTOCOL)

word_index = tokenizer.word_index

training_sequences = tokenizer.texts_to_sequences(training_sentences)
training_padded = pad_sequences(training_sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)

testing_sequences = tokenizer.texts_to_sequences(testing_sentences)
testing_padded = pad_sequences(testing_sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)


training_padded = np.array(training_padded)
training_labels = np.array(training_labels)
testing_padded = np.array(testing_padded)
testing_labels = np.array(testing_labels)

model = tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size, embedding_dim, input_length=max_length),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(24, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
num_epochs = 30
history = model.fit(training_padded, training_labels, epochs=num_epochs, validation_data=(testing_padded, testing_labels), verbose=2)
model.save('./sa_model')

sentence = ["I'm so freaking sad this is very depressing omg I am so sad!", "I am a joyous I am so happy today is an amazing"]
sequences = tokenizer.texts_to_sequences(sentence)
padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
print(model.predict(padded))