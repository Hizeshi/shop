<script setup>

</script>

<template>
<div class="container">
    <div class="row mt-4">
        <div class="col-md-5">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select category</option>
                <option value="1">Банан</option>
                <option value="2">Второй банан</option>
                <option value="3">Третий банан</option>
                <option value="3">Четвёртый банан</option>
            </select>
        </div>
        <div class="col-md-5">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search bu name...">
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-dark">Reset</button>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=f610b1c979bc4f12ef38170ee66ef41e_l-5086971-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">банан 1</h5>
        <p class="card-text">1000$</p>
        <p class="card-text">Банан</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://thumbs.dreamstime.com/b/unripe-banana-white-background-unripe-banana-isolated-white-background-104688636.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">банан 2</h5>
        <p class="card-text">1100$</p>
        <p class="card-text">Второй банан</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://sc04.alicdn.com/kf/Uea012d5e2c6c44c698881719b0ed1b7al.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">банан 3</h5>
        <p class="card-text">1200$</p>
        <p class="card-text">Третий банан</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=43b8f285e25e4f9c943e2d4d350b12f2_l-4557470-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">банан 4</h5>
        <p class="card-text">1500$</p>
        <p class="card-text">Четвёртый банан</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>    
    </div>
  </div>
</div>
</div>
</template>

