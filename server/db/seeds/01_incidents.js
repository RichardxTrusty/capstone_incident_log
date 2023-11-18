/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("incidents").del();
  await knex("incidents").insert([
    {
      id: 1,
      impact_condition: "Degradation",
      event_begin_date: "01/02/23",
      number_of_affected_users: "45",
      management_group: "TDIM",
      reporter_name: "Parmin Aujla",
      reporter_position: "Digital Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "parmin.aujla@telus.com",
      incidents_log: "This is an Incident Test",
    },
    {
      id: 2,
      impact_condition: "Degradation",
      event_begin_date: "02/03/23",
      number_of_affected_users: "5",
      management_group: "Channels",
      reporter_name: "Greame Lyon",
      reporter_position: "Channels Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "glyon@instock.com",
    },
    {
      id: 3,
      impact_condition: "Threat",
      event_begin_date: "300 Main Street",
      number_of_affected_users: "New Jersey",
      management_group: "USA",
      reporter_name: "Brad MacDonald",
      reporter_position: "Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "bmcdonald@instock.com",
    },
    {
      id: 4,
      impact_condition: "Failure",
      event_begin_date: "890 Brannnan Street",
      number_of_affected_users: "3",
      management_group: "USA",
      reporter_name: "Gary Wong",
      reporter_position: "Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "gwong@instock.com",
    },
    {
      id: 5,
      impact_condition: "Threat",
      event_begin_date: "09/13/23",
      number_of_affected_users: "Santa Monica",
      management_group: "USA",
      reporter_name: "Sharon Ng",
      reporter_position: "Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "sng@instock.com",
    },
    {
      id: 6,
      impact_condition: "Failure",
      event_begin_date: "10/5/23",
      number_of_affected_users: "Seattle",
      management_group: "USA",
      reporter_name: "Daniel Bachu",
      reporter_position: "Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "dbachu@instock.com",
    },
    {
      id: 7,
      impact_condition: "Threat",
      event_begin_date: "10/04/23",
      number_of_affected_users: "Miami",
      management_group: "USA",
      reporter_name: "Alana Thomas",
      reporter_position: "Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "athomas@instock.com",
    },
    {
      id: 8,
      impact_condition: "Failure",
      event_begin_date: "10/12/23",
      number_of_affected_users: "Boston",
      management_group: "USA",
      reporter_name: "Vanessa Mendoza",
      reporter_position: "Incident Manager",
      reporter_phone: "+1 (646) 123-1234",
      reporter_email: "vmendoza@instock.com",
    },
  ]);
};
