<template>
  <div class="calendar">
    <div class="month-year">
      <text-heading :level="2">Sep</text-heading>
      <text-heading :level="2">2022</text-heading>
    </div>
    <div class="row">
      <div>SUN</div>
      <div>MON</div>
      <div>TUE</div>
      <div>WED</div>
      <div>THU</div>
      <div>FRI</div>
      <div>SAT</div>
    </div>
    <div class="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <div class="row">
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
    <div class="row">
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
    </div>
    <div class="row">
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div>22</div>
      <div>23</div>
      <div>24</div>
    </div>
    <div class="row">
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TextHeading from '../Headings/TextHeading.vue';

export default defineComponent({
  components: { TextHeading },
  data() {
    return {
      attributes: [
        {
          dot: 'blue',
          dates: [
            new Date(2022, 9, 1), // Jan 1st
            new Date(2022, 9, 10), // Jan 10th
            new Date(2022, 9, 22), // Jan 22nd
            new Date(2022, 8, 4), // Jan 4th
            new Date(2022, 8, 10), // Jan 10th
            new Date(2022, 8, 15), // Jan 15th
            new Date(2022, 7, 12), // Jan 12th
            new Date(2022, 7, 26), // Jan 26th
            new Date(2022, 7, 15), // Jan 15th
          ],
        },
      ],
    };
  }
});
</script>

<style scoped>
.calendar {
  width: 100%;
  margin-bottom: 2px;
}
.row {
  grid-template-columns: repeat(7, 1fr);
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 99%;
  margin-bottom: -1px;
}
.month-year {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
}
.row > div {
  border: 2px #ccc solid;
  border-color: var(--border-color);
  min-height: 100%;
  margin-right: -2px;
  margin-bottom: -1px;
}
</style>
