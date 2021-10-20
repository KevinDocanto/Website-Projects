const right_arrow = $("#right-arrow");
const left_arrow = $("#left-arrow");
const surprise_me = $("#surprise-me");

let profile_image = $("#profile").attr("src");
let people = [];
let id = 0;

function getPerson(index) {
  $("#person").text(people[index].name);
  $("#job-area").text(people[index].job);
  $("#description").text(people[index].description);
  $("#profile").attr("src", people[index].img);
}

const person1 = new Review(
  "Sara Jones",
  "UX Designer",
  "I love UX designing",
  "person-1.jpeg"
);

people.push(person1);

getPerson(0);

profile_image =
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg";

const person2 = new Review(
  "Duane Howl",
  "Web Designer",
  "I do web design",
  profile_image
);

profile_image =
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg";

const person3 = new Review(
  "John Spark",
  "Software Engineer",
  "I am a Software Engineer",
  profile_image
);

profile_image =
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg";

const person4 = new Review(
  "Lebron James",
  "Data Scientist",
  "I am a Data Scientist",
  profile_image
);

people.push(person2);
people.push(person3);
people.push(person4);

$("#right-arrow").click(function next() {
  switch (id) {
    case 0:
      getPerson(1);
      id++;
      break;
    case 1:
      id++;
      getPerson(2);
      break;
    case 2:
      id++;
      getPerson(3);
    default:
      console.log(id);
  }
});

$("#left-arrow").click(function next() {
  switch (id) {
    case 1:
      id--;
      getPerson(0);
      break;
    case 2:
      id--;
      getPerson(1);
      break;
    case 3:
      id--;
      getPerson(2);
    default:
      console.log(id);
  }
});

$("#surprise").click(() => {
  let randID = Math.floor(Math.random() * people.length);

  if (randID === id) {
    while (randID === id) {
      randID = Math.floor(Math.random() * people.length);
    }
  }

  id = randID;
  getPerson(randID);
});
