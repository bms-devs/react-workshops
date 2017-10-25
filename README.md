# Warsztaty React
## Wymagane narzędzia
* git - https://git-scm.com/
* npm
* Ulubiony edytor kodu, najlepiej IntelliJ IDEA / Webstorm (30-dniowa darmowa wersja próbna do pobrania na https://www.jetbrains.com/webstorm/)

### Instrukcja instalacji npm
#### Windows/OSX
Ściągnij najnowszą wersję instalatora node.js z oficjalnej strony: https://nodejs.org/ i następnie zainstaluj ją używając domyślnej konfiguracji. Po zainstalowaniu zrestartuj swój komputer.

#### Linux
##### Debian/Ubuntu
Otwórz terminal i wpisz poniższe polecenia: 

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

#### Weryfikacja poprawności installacji

Wpisz poniższe polecenie w oknie terminala:

```bash
npm --version
```

Powinno to spowodować wypisanie wersji w postaci np:

```bash
5.3.0
```

## Kroki
### Inicjalizacja repozytorium oraz szablon aplikacji

Aby sklonować repozytorium wpisz w konsoli poniższe polecenie:

```bash
git clone git@github.com:bms-devs/react-workshops.git
```

Warsztaty będą podzielone na kroki, aby umożliwić szybkie przeskoczenie do statu aplikacji z konkretnego kroku stworzyliśmy branche dla każdego z nich. Przejście do kroku wykonasz poleceniem:

```bash
git checkout step-{numer_kroku}
```

gdzie w miejsce {numer_kroku} należy podać numer kroku, do którego chcemy przeskoczyć.

