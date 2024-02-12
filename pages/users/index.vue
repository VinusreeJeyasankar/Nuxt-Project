<template>
  <div class="m-5">
    <h1 class="text-center mb-5">Students Report</h1>
    <table v-if="!isLoading">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Roll No</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Course</th>
          <th>Course Duration</th>
          <th>Fees</th>
          <th>Status</th>
          <th>Date of Joining</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.Name }}</td>
          <td>{{ student['Roll-No'] }}</td>
          <td>{{ student.Age }}</td>
          <td>{{ student.Gender }}</td>
          <td>{{ student.Course }}</td>
          <td>{{ student['Course-Duration'] }}</td>
          <td>{{ student.Fees }}</td>
          <td>{{ student.Status }}</td>
          <td>{{ student['Date-of-joining'] }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="text-center">Loading...</div>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app';

const { data: students, error, isLoading } = useAsyncData(async () => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/VinusreeJeyasankar/Server2/db');
    const data = await response.json();
    return data.students;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
