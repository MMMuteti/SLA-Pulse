# SLA Pulse - SLA Tracker

SLA Pulse is an SLA (Service Level Agreement) Tracker built with **React** and **Next.js**. The app allows users to track and manage their tasks, monitor SLA deadlines, and receive alerts for SLA updates, breaches, and warnings. With an interactive dashboard and real-time data, it provides a comprehensive solution to monitor your tasks' SLA statuses.

---

## Features

- **Real-Time SLA Tracking**: Monitor tasks and their SLA deadlines in real time.
- **Interactive Dashboard**: Visualize task progress with charts and summaries.
- **Alerts & Notifications**: Display success, error, or warning alerts based on task status.
- **Task Management**: Update task status (e.g., mark tasks as completed or in progress).
- **Chart Visualization**: Visualize SLA progress through interactive line charts.
- **Responsive Design**: The app is fully responsive and works across various devices.

---

## Screenshots

![...](...)

---

## Installation

To run this project locally on your machine, follow the steps below:

### Prerequisites

- **Node.js** (v18.18 or higher) 
- **npm** or **yarn**

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MMMuteti/SLA-Pulse.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd SLA-Pulse
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up your backend (if applicable)**: Ensure your backend API is running or update the `API_URL` in the code to point to the correct endpoint.

5. **Run the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

---

## Usage

- **Dashboard**: The dashboard provides an overview of all SLA tasks, showing the total tasks, completed tasks, and pending tasks.
  
- **Alerts**: The app can show success, error, and warning alerts based on task status. These alerts will automatically disappear after 5 seconds or can be manually closed.

- **Task Management**: Tasks can be updated with new statuses such as "Completed" or "In Progress". Changes are reflected in real time in the dashboard and other parts of the app.

---

## API Endpoints

### `GET /api/slas`
Fetch all SLA data from the server.

- **Response**: A JSON array of all tasks with their respective status and other data.

### `PUT /api/update-sla`
Update the status of a specific SLA task. You need to send the `id` and `status` of the task in the request body.

- **Request body**:
  ```json
  {
    "id": 1,
    "status": "Completed"
  }
  ```

- **Response**: Updated SLA data.

---

## Technologies Used

- **React**: A JavaScript library for building the user interface.
- **Next.js**: A React framework for server-side rendering and routing.
- **Chart.js**: A library for creating charts and visualizations.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: Styling for layout and responsiveness.

---

## Contributing

We welcome contributions to **SLA Pulse**! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions, feel free to reach out!

- **Email**: mmmuteti@gmail.com
- **GitHub**: [@MMMuteti](https://github.com/MMMuteti)

---

## Acknowledgments

- Special thanks to the contributors and the open-source community.
- Thanks to **Next.js**, **React**, and **Chart.js** for the amazing tools that made this app possible.

```