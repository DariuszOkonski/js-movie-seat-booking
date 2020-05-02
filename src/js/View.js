class View {
    constructor() {
        this.selectedSeats = 0;

        this.selectMovie = document.getElementById('select-movie');
        
        document.querySelectorAll('.seats .seat').forEach(seat => seat.addEventListener('click', this.markSeat));
        document.querySelectorAll('.seats .seat.occupied').forEach(seat => seat.removeEventListener('click', this.markSeat));
    }

    markSeat(){
        this.classList.toggle('selected');
        console.log(this);
    }
}

export default View;