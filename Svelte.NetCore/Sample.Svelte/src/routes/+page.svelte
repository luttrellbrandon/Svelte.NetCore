<script>
  import { onMount } from 'svelte';

  let weatherData = null;
  let loading = false;

  async function getWeatherForecast() {
    loading = true;
    try {
      const response = await fetch('./api/weatherforecast');
      weatherData = await response.json();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      weatherData = null;
    } finally {
      loading = false;
    }
  }
</script>

<main>
  <h1>Welcome to SvelteKit with a .NET Core backend</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

  <button on:click={getWeatherForecast} disabled={loading}>
    {loading ? 'Loading...' : 'Get Weather Forecast'}
  </button>

  {#if weatherData}
    <h2>Weather Forecast</h2>
    <ul>
      {#each weatherData as forecast}
        <li>
          Date: {forecast.date}, Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F, Summary: {forecast.summary}
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1em;
  }

  h1, h2, p {
    margin-bottom: 1em;
  }

  button {
    background-color: #FF3E00; /* Svelte orange */
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #FF6B31; /* Lighter shade of Svelte orange for hover effect */
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5em;
  }
</style>
