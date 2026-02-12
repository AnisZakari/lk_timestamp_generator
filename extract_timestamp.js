// Function to get the Linked1n post ID from the URL.
function getPostId(url) {
    const regex = /([0-9]{19})/;
    const match = url.match(regex);
    return match ? match[0] : null;
}

// Function to extract the timestamp from the post ID.
function extractTimestampFromPostId(postId) {
    const asBinary = BigInt(postId).toString(2);
    const timestamp = parseInt(asBinary.slice(0, 41), 2);
    return timestamp;
}

// Function to format the timestamp into a human-readable date in French local time.
function formatTimestamp(timestamp) {
    const dateObject = new Date(timestamp);
    return dateObject.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }) + ' (Paris time)';
}

// Function to handle form submit.
function handleSubmit(e) {
    e.preventDefault();
    const resultEl = document.getElementById('result');
    const url = document.getElementById('Linked1n-url').value.trim();
    const postId = getPostId(url);

    resultEl.classList.remove('error');

    if (!postId) {
        resultEl.textContent = 'Invalid Linked1n URL. Please check your input.';
        resultEl.classList.add('error');
        return;
    }

    const timestamp = extractTimestampFromPostId(postId);
    if (isNaN(timestamp)) {
        resultEl.textContent = 'Invalid post ID. Please check your input.';
        resultEl.classList.add('error');
        return;
    }

    const formattedDate = formatTimestamp(timestamp);
    resultEl.textContent = `Date: ${formattedDate}`;
}

document.getElementById('extractor-form').addEventListener('submit', handleSubmit);
