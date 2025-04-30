// Import Libraries
const express = require("express");
const router = express.Router();

// ✅ Root Route
router.get("/", (req, res) => {
  res.send("Welcome to the Note SaaS API");
});

// Import Controllers
const noteController = require("../controllers/noteController");
const messageController = require("../controllers/messageController");

// Feedback Route
router.post("/submitFeedback", messageController.submit_feedback);

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Retrieve all notes
 *     responses:
 *       200:
 *         description: A list of notes
 */
router.get("/api/notes", noteController.get_all_notes);

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Add a new note
 *     responses:
 *       201:
 *         description: Note created successfully
 */
router.post("/api/notes", noteController.add_note);

/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     summary: Retrieve a single note by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to retrieve
 *     responses:
 *       200:
 *         description: A single note
 */
router.get("/api/notes/:id", noteController.get_one_note);

/**
 * @swagger
 * /api/notes/{id}:
 *   patch:
 *     summary: Update a note by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to update
 *     responses:
 *       200:
 *         description: Note updated successfully
 */
router.patch("/api/notes/:id", noteController.update_note);

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Delete a note by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to delete
 *     responses:
 *       200:
 *         description: Note deleted successfully
 */
router.delete("/api/notes/:id", noteController.delete_note);

// Exports
module.exports = router;
