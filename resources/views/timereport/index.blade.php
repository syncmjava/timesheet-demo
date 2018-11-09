@extends('layouts.app')



@section('content')
<div id="container">
<script type="text/javascript">

var dataSet = [
    {"date" : "2018/11/7", "checkinTime" : "8:30","checkoutTime" : "13:30", "workTime" : "5:00", "emp_id" : "20999991", "name" : "小山　一昭" },
    {"date" : "2018/11/8", "checkinTime" : "10:00","checkoutTime" : "21:00", "workTime" : "11:00", "emp_id" : "20999991", "name" : "小山　一昭" },
    {"date" : "2018/11/9", "checkinTime" : "13:00","checkoutTime" : "(24:00)", "workTime" : "11:00", "emp_id" : "20999991", "name" : "小山　一昭" },
    {"date" : "2018/11/10", "checkinTime" : "(00:00)","checkoutTime" : "12:00", "workTime" : "12:00", "emp_id" : "20999991", "name" : "小山　一昭" },
    {"date" : "2018/11/11", "checkinTime" : "8:30","checkoutTime" : "18:30", "workTime" : "10:00", "emp_id" : "20999991", "name" : "小山　一昭" },
];


$(document).ready(function() {
    $('#example').DataTable( {
      ordering: false,
      info: false,
      paging: false,
      searching: false,
        data: dataSet,
        columns: [ 
            { data: "date" },
            { data: "checkinTime" },
            { data: "checkoutTime" },
            { data: "workTime" },
            { data: "emp_id" },
            { data: "name" }           
        ]
    } );
    
} );
</script>
    <ul class="nav nav-tabs nav-justified">
    <li style="background-color:#6666FF; color:#FFFFFF; width:100%"><h5><label>&nbsp;&nbsp;勤務結果レポート</label></h5></li>
    </ul>
    <br>
    <div class="btn-toolbar mb-2 mb-md-0">
          <div>
          <h4>◆<span style="font-weight:bold">稼働状況</span></h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div> 
          <div class="btn-group mr-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select class="custom-select d-block w-100" style="height:40px;color:red;font-weight:bold" id="selectYM" required>
                <option style="color:black;font-weight:bold" value="">年月を選択する</option>
                <option style="color:black;font-weight:bold" select value="201808">201808</option>
                <option style="color:black;font-weight:bold" selected value="201807">201807</option>
                <option style="color:black;font-weight:bold" select value="201806">201806</option>
            </select>&nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-secondary" style="height:40px;">最新の情報に更新</button>
          </div> 
    </div>
    <br>
    <div class="table-responsive">
      <label>9件</label>
      <table id="example" class="display" width="100%">
        <thead>
          <tr><th style="background-color:#6666FF; color:#FFFFFF">日付</th>               
              <th style="background-color:#6666FF; color:#FFFFFF">出勤時点</th>
              <th style="background-color:#6666FF; color:#FFFFFF">退勤時点</th>
              <th style="background-color:#6666FF; color:#FFFFFF">勤務時間</th>
              <th style="background-color:#6666FF; color:#FFFFFF">ID</th>
              <th style="background-color:#6666FF; color:#FFFFFF">氏名</th>
          </tr>
        </thead>
      </table>
    </div>
</div>
@endsection
