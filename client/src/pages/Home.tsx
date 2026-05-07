import { useState, useEffect } from "react";
import { Check, Trash2, Plus, Trash } from "lucide-react";

/**
 * Task Manager - Modern Glassmorphic Design
 * 
 * Features:
 * - Add, delete, toggle, and edit tasks
 * - Filter by All, Active, Completed
 * - Clear all completed tasks at once
 * - Local storage persistence
 * - Fluid animations and glassmorphic UI
 * - Fully responsive design
 */

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = "all" | "active" | "completed";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const loadTasks = () => {
      try {
        const stored = localStorage.getItem("task-manager-tasks");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setTasks(parsed);
          }
        }
      } catch (error) {
        console.error("Failed to load tasks from localStorage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("task-manager-tasks", JSON.stringify(tasks));
    }
  }, [tasks, isLoading]);

  // Generate unique ID
  const generateId = () => `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Add a new task
  const addTask = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    const newTask: Task = {
      id: generateId(),
      text: trimmedInput,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks([newTask, ...tasks]);
    setInputValue("");
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Start editing a task
  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  // Save edited task
  const saveEdit = (id: string) => {
    const trimmedText = editingText.trim();
    if (!trimmedText) {
      deleteTask(id);
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: trimmedText } : task
        )
      );
    }
    setEditingId(null);
    setEditingText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent, taskId?: string) => {
    if (e.key === "Enter") {
      if (taskId) {
        saveEdit(taskId);
      } else {
        addTask();
      }
    } else if (e.key === "Escape" && taskId) {
      cancelEdit();
    }
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Calculate statistics
  const activeTasks = tasks.filter((t) => !t.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass rounded-3xl px-6 sm:px-8 py-8 sm:py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium text-center">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent mb-2">
            Task Manager
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Stay focused, get things done</p>
        </div>

        {/* Input Section */}
        <div className="mb-6 sm:mb-8 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              placeholder="Add a new task..."
              className="glass-input flex-1 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500/50"
            />
            <button
              onClick={addTask}
              className="glass-dark rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 font-semibold text-indigo-600 hover:text-indigo-700 transition-all duration-200 hover:bg-white/80 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Plus size={18} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-6 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
          <p className="text-xs sm:text-sm text-gray-600 font-medium">
            <span className="text-indigo-600 font-bold">{tasks.length}</span> total •{" "}
            <span className="text-indigo-600 font-bold">{activeTasks}</span> active •{" "}
            <span className="text-amber-500 font-bold">{completedTasks}</span> completed
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 sm:mb-8 flex gap-2 sm:gap-3 justify-center flex-wrap">
          {(["all", "active", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill capitalize transition-all duration-200 text-xs sm:text-sm ${
                filter === f ? "active" : ""
              }`}
            >
              {f === "all" ? "All Tasks" : f === "active" ? "Active" : "Completed"}
            </button>
          ))}
        </div>

        {/* Tasks List */}
        <div className="space-y-2 sm:space-y-3 mb-6">
          {filteredTasks.length === 0 ? (
            <div className="glass rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                {filter === "completed" ? "✨" : filter === "active" ? "🎯" : "📋"}
              </div>
              <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">
                {filter === "completed"
                  ? "No completed tasks yet. Keep working!"
                  : filter === "active"
                  ? "All caught up! No active tasks."
                  : "No tasks yet. Add one to get started!"}
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`task-card group animate-slide-in-up ${
                  task.completed ? "completed" : ""
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
                      task.completed
                        ? "bg-amber-500 border-amber-500 animate-scale-checkmark"
                        : "border-indigo-300 hover:border-indigo-500 bg-white/50"
                    }`}
                  >
                    {task.completed && <Check size={14} className="sm:w-4 sm:h-4 text-white" />}
                  </button>

                  {/* Task Text / Edit Input */}
                  {editingId === task.id ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, task.id)}
                      onBlur={() => saveEdit(task.id)}
                      autoFocus
                      className="glass-input flex-1 text-sm sm:text-base"
                    />
                  ) : (
                    <div
                      onClick={() => startEdit(task)}
                      className={`flex-1 cursor-pointer py-1 px-2 rounded-lg transition-all duration-200 hover:bg-white/30 text-sm sm:text-base ${
                        task.completed
                          ? "line-through text-gray-500"
                          : "text-gray-800 font-medium"
                      }`}
                    >
                      {task.text}
                    </div>
                  )}

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-all duration-200 opacity-0 group-hover:opacity-100 p-1 sm:p-2 hover:bg-red-50/50 rounded-lg"
                  >
                    <Trash2 size={16} className="sm:w-4.5 sm:h-4.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Clear Completed Button */}
        {completedTasks > 0 && (
          <div className="mb-6 flex justify-center">
            <button
              onClick={clearCompleted}
              className="glass-dark rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 font-semibold text-red-600 hover:text-red-700 transition-all duration-200 hover:bg-white/80 flex items-center gap-2 text-sm sm:text-base"
            >
              <Trash size={16} className="sm:w-5 sm:h-5" />
              Clear Completed ({completedTasks})
            </button>
          </div>
        )}

        {/* Footer Info */}
        {tasks.length > 0 && (
          <div className="text-center text-xs sm:text-sm text-gray-500 px-4">
            <p>💡 Double-click a task to edit • Hover to delete</p>
          </div>
        )}
      </div>
    </div>
  );
}
