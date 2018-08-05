import React, {Component} from 'react';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import Form from './Form.js'
class GenrePrediction extends Component {

  render() {
    return (<div >
      <div className="Center">
        <PageHeader>
          Genre Prediction
        </PageHeader>
      </div>
      <div >
        Over my Senior year at Boston College I was lucky enough to be able to develop my coding skills while working to understand music, one of my deep interests and passions. These opportunities came about in two classes, Artificial Intelligence, taught by Sergio Alvarez, and Natural Language Processing, taught by Emily Prud&#39;hommeaux. These projects are explained in more detail below, but both dealt with the classification problem of determining a song&#39;s genre given it&#39;s attributes.
      </div>

      <h1>
        Using Deep Learning to Categorize Music through Spectrogram Analysis
      </h1>
      <br/>
      <p>Human&#39;s are especially good at categorizing the genre of a song within seconds of hearing it, due to certain audio-patterns and characteristics that we attribute to said genre&#39;s. Thus, I alongside 3 amazing programmers, Nick Loeper, Evan Otero and Andrew Heimermann, came up with a project to build a Convolutional Recurrent Neural Network (CRNN) that is able to categorize song-genre through these audio features. However, audio features are expensive to analyze due to their size. We worked around this issue by translating audio-files into visual representations of themselves using spectrograms, and used these visual representations in classifying song genre. After building our CRNN and training it on this data, we were able to achieve 54.42% classification accuracy, which was significantly better than random given that we trained the CRNN with 13 potential genres. More information about this project can be found by clicking the link&nbsp;
        <a href="https://drive.google.com/file/d/1Q7qetqR-1erDwUear9AxSiv4tgCM7E6z/view">here</a>.
      </p>
      <br/>
      <br/>
      <h1>
        Genre Classification through Lyric Analysis
      </h1>
      <br/>
      <p>For my Natural Language Processing (NLP) class, me and 2 other fantastic programmers, Artem Shkuratov and Luis Grisanti, tackled the challenge of classifying music genre through lyrics alone, and without any understanding of a song&#39;s audio features in various ways. By accessing the lyrics of music through Spotify&#39;s API and webscrapers on Genius.com, we gained a considerable amount of data to work on. We experimented with this data to see if non-neural network solutions would provide success in classifying genre. However, the methodology&#39;s we employed were considerably less successful than the CRNN detailed above, showing us the power of Neural Networks as well as how lyrics were less genre-specific than audio features. More information about this project can be found by clicking the link&nbsp;
        <a href="https://drive.google.com/file/d/1JThrwx1aB4HS_Vb8iMgB5YT8-1ExJR0y/view?usp=sharing">here</a>.
      </p>
      <br/>
      <br/>

    </div>)
  }
}

export default GenrePrediction
