// Function to get the LinkedIn post ID from the URL.
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

// Function to handle the click event of the "Get" button.
function handleGetButtonClick() {
    const url = document.getElementById('linkedin-url').value;
    const postId = getPostId(url);

    if (!postId) {
        document.getElementById('result').textContent = 'Invalid LinkedIn URL. Please check your input.';
        return;
    }

    const timestamp = extractTimestampFromPostId(postId);
    if (isNaN(timestamp)) {
        document.getElementById('result').textContent = 'Invalid post ID. Please check your input.';
        return;
    }

    const formattedDate = formatTimestamp(timestamp);
    document.getElementById('result').textContent = `Date: ${formattedDate}`;
}

// Assign the handleGetButtonClick function as the click event handler of the "Get" button.
document.querySelector('button').addEventListener('click', handleGetButtonClick);
