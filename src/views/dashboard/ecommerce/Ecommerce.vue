<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="12"
        md="12"
      >
        <b-card
          v-if="data"
          no-body
          class="card-statistics"
        >
          <b-card-header>
            <b-card-title>Statistics</b-card-title>
            <!-- <b-card-text class="font-small-2 mr-25 mb-0">
              Updated 1 month ago
            </b-card-text> -->
          </b-card-header>
          <b-card-body class="statistics-body">
            <b-row>
              <b-col
                sm="6"
                lg="3"
              >
                <b-media no-body>
                  <b-media-aside

                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      variant="light-info"
                    >
                      <feather-icon
                        size="24"
                        icon="UserIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      Users
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      {{ users.length }}
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
              <b-col
                sm="6"
                lg="3"
              >
                <b-media no-body>
                  <b-media-aside

                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      variant="light-primary"
                    >
                      <feather-icon
                        size="24"
                        icon="ToolIcon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      Services
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      {{ users.length }}
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col>
              <!-- <b-col
                v-for="item in data"
                :key="item.icon"
                xl="3"
                sm="6"
                :class="item.customClass"
              >
                <b-media no-body>
                  <b-media-aside

                    class="mr-2"
                  >
                    <b-avatar
                      size="48"
                      :variant="item.color"
                    >
                      <feather-icon
                        size="24"
                        :icon="item.icon"
                      />
                    </b-avatar>
                  </b-media-aside>
                  <b-media-body class="my-auto">
                    <h4 class="font-weight-bolder mb-0">
                      {{ item.title }}
                    </h4>
                    <b-card-text class="font-small-3 mb-0">
                      {{ item.subtitle }}
                    </b-card-text>
                  </b-media-body>
                </b-media>
              </b-col> -->
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row class="match-height">
      <b-col lg="4">
        <b-row class="match-height">
          <!-- Bar Chart - Orders -->
          <b-col
            lg="6"
            md="3"
            cols="6"
          >
            <ecommerce-order-chart :data="data.statisticsOrder" />
          </b-col>
          <!--/ Bar Chart - Orders -->
          <b-col
            lg="6"
            md="3"
            cols="6"
          >
            <ecommerce-profit-chart :data="data.statisticsProfit" />
          </b-col>
          <b-col
            lg="12"
            md="6"
          >
            <ecommerce-earnings-chart :data="data.earningsChart" />
          </b-col>
        </b-row>
      </b-col>

      <!-- Revenue Report Card -->
      <b-col lg="8">
        <ecommerce-revenue-report :data="data.revenue" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>

    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="8">
        <ecommerce-company-table :table-data="data.companyTable" />
      </b-col>
      <!--/ Company Table Card -->

      <!-- Developer Meetup Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-meetup :data="data.meetup" />
      </b-col>
      <!--/ Developer Meetup Card -->

      <!-- Browser States Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-browser-states />
      </b-col>
      <!--/ Browser States Card -->

      <!-- Goal Overview Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-goal-overview :data="data.goalOverview" />
      </b-col>
      <!--/ Goal Overview Card -->

      <!-- Transaction Card -->
      <b-col
        lg="4"
        md="6"
      >
        <ecommerce-transactions :data="data.transactionData" />
      </b-col>
      <!--/ Transaction Card -->
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody, BCard, BCardHeader, BCardTitle, BCardText, BCardBody,
} from 'bootstrap-vue'

// import { getUserData } from '@/auth/utils'
import EcommerceRevenueReport from './EcommerceRevenueReport.vue'
import EcommerceOrderChart from './EcommerceOrderChart.vue'
import EcommerceProfitChart from './EcommerceProfitChart.vue'
import EcommerceEarningsChart from './EcommerceEarningsChart.vue'
import EcommerceCompanyTable from './EcommerceCompanyTable.vue'
import EcommerceMeetup from './EcommerceMeetup.vue'
import EcommerceBrowserStates from './EcommerceBrowserStates.vue'
import EcommerceGoalOverview from './EcommerceGoalOverview.vue'
import EcommerceTransactions from './EcommerceTransactions.vue'

export default {
  components: {
    BRow,
    BCol,
    BMedia,
    BMediaAside,
    BAvatar,
    BMediaBody,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,

    EcommerceRevenueReport,
    EcommerceOrderChart,
    EcommerceProfitChart,
    EcommerceEarningsChart,
    EcommerceCompanyTable,
    EcommerceMeetup,
    EcommerceBrowserStates,
    EcommerceGoalOverview,
    EcommerceTransactions,
  },
  data() {
    return {
      data: {},
      users: [],
    }
  },
  async created() {
    // data
    this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data
      })
    await this.$http.get('/admin/users')
      .then(response => {
        this.users = response.data.data
        console.log(this.data.users.length)
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
