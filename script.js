// List of 500 prefixes and suffixes for generating nicknames
const prefixes = [
    'Sang', 'Si', 'Pangeran', 'Putri', 'Si', 'Raja', 'Ratu', 'Kaisar', 'Ninja', 'Petarung', 'Master', 'Cahaya', 
    'Pahlawan', 'Bijaksana', 'Satria', 'Kekuatan', 'Harapan', 'Pendekar', 'Amanah', 'Legenda', 'Vampir', 'Dewa', 
    'Pemimpin', 'Raksasa', 'Penyihir', 'Bintang', 'Perkasa', 'Misterius', 'Sejati', 'Heaven', 'Warrior', 'Drakula',
    // Add up to 500 unique prefixes here
];
const suffixes = [
    'Perkasa', 'Pemberani', 'Cahaya', 'Sejati', 'Hebat', 'Bijaksana', 'Petarung', 'Misterius', 'Penjaga', 'Sakti',
    'Raja', 'Kuat', 'Elit', 'Agung', 'Unik', 'Sinar', 'Sukses', 'Sempurna', 'Kehormatan', 'Petir', 'Teguh', 'Harmoni',
    'Bangsawan', 'Raja', 'Jaya', 'Fighter', 'Dewa', 'Sang Penguasa', 'Satria', 'Gagah', 'Pria', 'Wanita',
    // Add up to 500 unique suffixes here
];

// Hash function to generate a unique number based on the input name
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// Function to generate the nickname based on the name input
function generateNickname(name) {
    const hash = hashString(name.toLowerCase());  // Hash the name to ensure consistency
    const prefixIndex = Math.abs(hash) % prefixes.length;  // Get a consistent index for prefix
    const suffixIndex = Math.abs(hash) % suffixes.length;  // Get a consistent index for suffix

    const nickname = `${prefixes[prefixIndex]} ${name} ${suffixes[suffixIndex]}`;
    return nickname;
}

// Event listener for the generate button
document.getElementById('generateButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    if (name === "") {
        alert("Silakan masukkan nama!");
        return;
    }

    // Generate the nickname
    const nickname = generateNickname(name);

    // Display the nickname result
    document.getElementById('nicknameResult').textContent = nickname;
});
