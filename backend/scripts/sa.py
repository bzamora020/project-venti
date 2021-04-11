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

sentence = ["I'm very close to graduating with my degree and I'm constantly terrified by the uncertainty of whether or not I will be able to have a career after graduation. I'm terrified by the thought that I will never be able to get my foot in the door and I will end up in poverty for the rest of my life. I don't want to imagine myself spending the rest of my life in the same town I grew up in, working shitty low-paying jobs with no escape. I don't know what it is about tonight but those thoughts feel especially oppressive at the moment. Does anyone in this sub get really bad anxiety thinking about these things? How do you deal with that anxiety?", 
"I wash my pillow cover everyday, because I usually cry myself to sleep and by the time I wake up it’s covered in dried up tears. I go prolonged periods of time without seeing the sun, I work at night and by the time I get home the sun is almost starting to rise and that’s when I sleep. So by the time I wake up it’s gone down, the longest I’ve gone without seeing the sun has been like 2 months. I drive at night and find an abandoned or empty place where I park my car and cry. I hug the steering wheel and I pretend it’s another person. If I’m not working or doing college work on my computer I lay in bed starring at the wall or ceiling for hours until I pass out. I drink vodka just feel numb and make me forget. I’ve never had a relationship before and don’t know what it feels like to be loved by another person. Of course, no one knows any of this. I pretend I’m okay and if you ever saw me in person I’ll most likely be smiling, laughing, and having a good time. I live in isolation and don’t dream about anything anymore, I just wake up because I have to."
]
sequences = tokenizer.texts_to_sequences(sentence)
padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
print(model.predict(padded))