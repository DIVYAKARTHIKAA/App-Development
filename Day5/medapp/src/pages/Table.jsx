import '../assets/css/table.css'
 


 
function Table() {
    return (
<div class="row">
  <div class="column">
    <table>
      <tr>
        <th>Doc_Id</th>
        <th>Doc_Name</th>
        <th>Speciality</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Smith</td>
        <td>Dermatology</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Daisy</td>
        <td>Gynecology</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Johnson</td>
        <td>Pediatrics</td>
      </tr>
    </table>
  </div>
  <div class="column1">
    <table>
      <tr>
        <th>Pat_Id</th>
        <th>Pat_Name</th>
        <th>Reason</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Raja</td>
        <td>Infected Finger</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jackson</td>
        <td>Chest Pains</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Michael</td>
        <td>Poison ivy</td>
      </tr>
    </table>
  </div>
</div>

    );
}
 
export default Table;