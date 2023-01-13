<template>
  <div class="profile-transactions">
    <table>
      <tr>
        <th>Status</th>
        <th>Specialitāts</th>
        <th>Datums</th>
        <th>Cena</th>
      </tr>
      <tr>
        <td><div class="dot-green"></div></td>
        <td>Maria Anders</td>
        <td>12.12.2022</td>
        <td>500€</td>
      </tr>
      <tr>
        <td><div class="dot-green"></div></td>
        <td>Maria Anders</td>
        <td>12.12.2022</td>
        <td>500€</td>
      </tr>
      <tr>
        <td><div class="dot-green"></div></td>
        <td>Maria Anders</td>
        <td>12.12.2022</td>
        <td>500€</td>
      </tr>
      <tr>
        <td><div class="dot-green"></div></td>
        <td>Maria Anders</td>
        <td>12.12.2022</td>
        <td>500€</td>
      </tr>
      <tr>
        <td><div class="dot-green"></div></td>
        <td>Maria Anders</td>
        <td>12.12.2022</td>
        <td>500€</td>
      </tr>
      <tr>
        <td><div class="dot-green"></div></td>
        <td>Maria Anders</td>
        <td>12.12.2022</td>
        <td>500€</td>
      </tr>
    </table>
    <div class="pagination">
      <i class="pagination-button bi bi-caret-left"></i>
      <p class="pagination-button">1</p>
      <p class="pagination-button">1</p>
      <p class="pagination-button">1</p>
      <p class="pagination-button">1</p>
      <p class="pagination-button">1</p>
      <i class="pagination-button bi bi-caret-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'ProfileLayout',
  auth: true
}
</script>
