(ns env.android.gen)

(defmacro lots-of-code []
  (cons `do
        (repeatedly 300
                    (fn []
                       `(defn ~(symbol (str "junk"
                                            (apply str (repeatedly 2 #(rand-int Integer/MAX_VALUE)))))
                          [~'a ~'b ~'c ~'d]
                          ~(cons `do (repeat 100 `(println ~'a ~'b ~'c ~'d))))))))
