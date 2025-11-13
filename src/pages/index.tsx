import React, { useState } from "react";

export default function App() {
  const [added, setAdded] = useState(false);
  const [wait, setWait] = useState(false);
  const [next, setNext] = useState(false); // controls mobile flow

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    fq: 4,
    eod: 4,
    clean: 4,
    ser: 4,
    overall: 4,
    date: new Date(),
    message: "",
    image: ""
  });

  const showdata = {
    1: "Poor",
    2: "Need to Improve",
    3: "Average",
    4: "Can Do Better",
    5: "Excellent"
  };
  const showemoji = { 1: "🤬", 2: "🙁", 3: "😶", 4: "😁", 5: "😍" };
  const text_color = {
    1: "text-red-500",
    2: "text-orange-500",
    3: "text-yellow-500",
    4: "text-green-500",
    5: "text-emerald-600"
  };

  function ValidateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) return true;
    alert("Invalid Email");
    return false;
  }

  async function addingpost() {
    if (!ValidateEmail(user.email)) return;
    if (user.phone.length !== 10) {
      alert("Invalid Phone number");
      return;
    }

    setWait(true);
    await fetch("/api/addpost", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" }
    });
    setWait(false);
    setAdded(true);
    window.location.assign("https://sanghamitra-resort.com/");
  }

  const StarRating = ({ rating, onChange }) => (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="text-2xl md:text-4xl transition-transform scale-90 hover:scale-100 focus:outline-none"
        >
          {star <= rating ? "⭐" : "☆"}
        </button>
      ))}
    </div>
  );

  if (wait) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Submitting your feedback...
          </h2>
          <p className="text-gray-600">Thank you for your valuable time</p>
        </div>
      </div>
    );
  } else if (added) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg">
            We appreciate your valuable feedback
          </p>
          <p className="text-purple-600 font-semibold mt-2">
            Hope you enjoyed your experience! 😊
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-blue-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-4">
            We'd Love Your Feedback!
          </h1>
          <p className="text-purple-600 text-center text-lg mb-12">
            Help us serve you better
          </p>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* On large screens: both columns visible */}
            <div className="hidden md:grid grid-cols-2 gap-8 p-8 md:p-12 ">
              {/* Left Column - Details */}
              <div className="space-y-6 order-2">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Your Details
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500"
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500"
                        type="email"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500"
                        type="number"
                        value={user.phone}
                        onChange={(e) =>
                          setUser({ ...user, phone: e.target.value })
                        }
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500 resize-none"
                        value={user.message}
                        onChange={(e) =>
                          setUser({ ...user, message: e.target.value })
                        }
                        rows="4"
                        placeholder="Share your thoughts with us..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Ratings */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Rate Your Experience
                  </h2>

                  {["fq", "eod", "ser", "clean", "overall"].map((field, i) => {
                    const labels = [
                      "Food Quality",
                      "Ease of Ordering",
                      "Service",
                      "Cleanliness",
                      "Overall Experience"
                    ];
                    return (
                      <div key={field} className="bg-white p-2 rounded-xl shadow-sm">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          {labels[i]}
                        </label>
                        <div className="flex items-center justify-around mb-2">
                          <StarRating
                            rating={user[field]}
                            onChange={(e) => setUser({ ...user, [field]: e })}
                          />
                          <span className="text-2xl">{showemoji[user[field]]}</span>
                        </div>
                        <p
                          className={`text-center font-semibold ${text_color[user[field]]}`}
                        >
                          {showdata[user[field]]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Submit Button for Large Screens */}
            <div className="hidden md:block px-8 md:px-12 pb-8">
              <button
                onClick={addingpost}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Submit Feedback
              </button>
            </div>

            {/* Small Screens - Step Flow */}
            <div className="block md:hidden p-6">
              {!next ? (
                // Step 1: Ratings
                <div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Rate Your Experience
                    </h2>

                    {["fq", "eod", "ser", "clean", "overall"].map((field, i) => {
                      const labels = [
                        "Food Quality",
                        "Ease of Ordering",
                        "Service",
                        "Cleanliness",
                        "Overall Experience"
                      ];
                      return (
                        <div
                          key={field}
                          className="bg-white p-2 rounded-xl shadow-sm mb-4"
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            {labels[i]}
                          </label>
                          <div className="flex items-center justify-around mb-2">
                            <StarRating
                              rating={user[field]}
                              onChange={(e) => setUser({ ...user, [field]: e })}
                            />
                            <span className="text-2xl">{showemoji[user[field]]}</span>
                          </div>
                          <p
                            className={`text-center font-semibold ${text_color[user[field]]}`}
                          >
                            {showdata[user[field]]}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setNext(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    Next
                  </button>
                </div>
              ) : (
                // Step 2: Details
                <div>
                  <button
                    onClick={() => setNext(false)}
                    className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md mb-4"
                  >
                    ← Back
                  </button>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Your Details
                    </h2>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500"
                          value={user.name}
                          onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          }
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500"
                          type="email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500"
                          type="number"
                          value={user.phone}
                          onChange={(e) =>
                            setUser({ ...user, phone: e.target.value })
                          }
                          placeholder="10-digit mobile number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Additional Comments
                        </label>
                        <textarea
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-500 resize-none"
                          value={user.message}
                          onChange={(e) =>
                            setUser({ ...user, message: e.target.value })
                          }
                          rows="4"
                          placeholder="Share your thoughts with us..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={addingpost}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-300"
                  >
                    Submit Feedback
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
