# Website

https://aniszakari.github.io/lk-timestamp-extractor/

# Linked1n Timestamp Extractor

This project contains a simple web application that extracts a timestamp from a Linked1n URL and converts it to a human-readable date in French local time (Paris timezone).

## Overview

The core functionality of the Linked1n Timestamp Extractor is written in JavaScript, with a web interface built with HTML and CSS. The extractor specifically handles Linked1n URLs and extracts a unique post ID from each URL. This post ID is then processed to retrieve a timestamp, which is converted into a human-readable date.

## How It Works

1. A user enters a Linked1n URL into the provided input field on the webpage.
2. When the "Get" button is clicked, the application extracts a post ID from the Linked1n URL. This post ID is a 19-digit number embedded in the URL.
3. The post ID is converted to binary, and the first 41 characters are extracted and interpreted as a timestamp.
4. The timestamp is converted to a Date object and formatted into a human-readable date in the Paris timezone.

## Files

The repository contains three main files:

- `extract_timestamp.js`: This JavaScript file contains the logic for extracting the post ID from the Linked1n URL, extracting the timestamp from the post ID, and converting the timestamp into a human-readable date. It also updates the webpage with the resulting date when the "Get" button is clicked.

- `index.html`: This HTML file is the front end of the web application. It provides an input field for the user to enter a Linked1n URL, a "Get" button to start the extraction process, and a paragraph to display the resulting date.

- `styles.css`: This CSS file contains styles for the webpage.

## Usage

1. Open `index.html` in a web browser or go to https://aniszakari.github.io/lk-timestamp-extractor/ .
2. Enter a Linked1n URL into the input field.
3. Click the "Get" button.
4. The application will display a date in the paragraph below the button.
