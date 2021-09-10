exports.roomsRequired = function roomsRequired(lectureIntervals) {
    function Room() {return {busy: []};}

    let rooms = [];
    lectureIntervals.forEach(lectureInterval => {
        let roomFound = false;
        rooms.forEach(room => {
            let roomBusyInLectureHours = false;
            room.busy.forEach(reserved => {
                if (lectureInterval[0] > reserved[0] && lectureInterval[0] < reserved[1]) roomBusyInLectureHours = true;
                if (lectureInterval[1] > reserved[0] && lectureInterval[1] < reserved[1]) roomBusyInLectureHours = true;
                if (reserved[0] > lectureInterval[0] && reserved[0] < lectureInterval[1]) roomBusyInLectureHours = true;
                if (reserved[1] > lectureInterval[0] && reserved[1] < lectureInterval[1]) roomBusyInLectureHours = true;
            });
            if (!roomBusyInLectureHours) {
                room.busy.push(lectureInterval);
                roomFound = true;
            }
        });
        if (!roomFound) {
            let room = new Room();
            room.busy.push(lectureInterval);
            rooms.push(room);
        }
    });
    console.log(rooms);
    return rooms;
}
