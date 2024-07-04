document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pobierz wartość klucza z formularza
    const key = document.getElementById('keyInput').value;

    // Tutaj można dodać logikę sprawdzającą klucz i wykonującą odpowiednie działania (np. pobieranie pliku)
    // Załóżmy, że mamy tutaj prosty przykład, gdzie po wpisaniu dowolnego klucza wyświetlimy link do pobrania pliku

    // Tutaj powinna być logika sprawdzająca klucz
    // Można pominąć weryfikację dla tego przykładu

    // Generowanie linku do pobrania pliku
    const encryptedFileUrl = 'ścieżka/do/zaszyfrowanego/pliku'; // Tutaj podaj ścieżkę do zaszyfrowanego pliku lub endpoint do pobrania pliku

    // Pobranie elementu linku do pobrania pliku
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = encryptedFileUrl;

    // Wyświetlenie kontenera z linkiem do pobrania pliku
    document.getElementById('downloadLinkContainer').style.display = 'block';
});
