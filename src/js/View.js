class View {
    constructor() {
        this.selectedSeats = 0;
        this.ticketFare = 10;

        this.selectMovie = document.getElementById('select-movie').addEventListener('change', this.pickAMovie.bind(this));
        this.selectedSeatsNumber = document.getElementById('seats-number');
        this.ticketPrice = document.getElementById('price');

        document.querySelectorAll('.seats .seat').forEach(seat => seat.addEventListener('click', this.markSeat.bind(this)));   
        
        this.randomlyOccupiedSeats();
    }

    pickAMovie(e) {
        this.ticketFare = Number(e.target.options[e.target.options.selectedIndex].value);
        this.setTickets();
    }

    markSeat(e) {
        if(e.target.classList.contains('occupied'))
            return;

        e.target.classList.toggle('selected');

        this.checkNumberOfSelectedSeats();
        this.setTickets();
    }

    checkNumberOfSelectedSeats() {
        this.selectedSeats = document.querySelectorAll('.seats .seat.selected').length;
    }

    setTickets() {
        this.selectedSeatsNumber.textContent = this.selectedSeats;
        this.ticketPrice.textContent = this.selectedSeats * this.ticketFare;
    }

    randomlyOccupiedSeats() {
        const occupiedSeats = Math.floor((Math.random() * 20) + 10);
        const seatsToOccupied = [];
        
        for(let i = 0; i < occupiedSeats; i++) {
            seatsToOccupied.push(Math.floor(Math.random() * document.querySelectorAll('.seats .seat').length));
        }

        seatsToOccupied.forEach(seat => {
            document.querySelectorAll('.seats .seat')[seat].classList.add('occupied')
        });
    }
}

export default View;