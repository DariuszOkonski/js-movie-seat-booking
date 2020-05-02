class View {
    constructor() {
        this.selectedSeats = 0;
        this.ticketFare = 10;

        this.selectMovie = document.getElementById('select-movie').addEventListener('change', this.pickAMovie.bind(this));
        this.selectedSeatsNumber = document.getElementById('seats-number');
        this.ticketPrice = document.getElementById('price');

        document.querySelectorAll('.seats .seat').forEach(seat => seat.addEventListener('click', this.markSeat.bind(this)));     
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
        console.log('set tickets');
        this.selectedSeatsNumber.textContent = this.selectedSeats;
        this.ticketPrice.textContent = this.selectedSeats * this.ticketFare;
    }

    randomlyOccupiedSeats() {
        console.log('randomlyOccupiedSeat');
        
    }
}

export default View;