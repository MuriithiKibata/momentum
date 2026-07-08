import { globalStyles } from "@/styles/global";
import React, { useState, useMemo } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Calendar, toDateId } from "@marceloterreiro/flash-calendar";
import { colors } from "@/colors";
import RadioGroup from "react-native-radio-buttons-group";
import useGetCategory from "../Queries/categoryQuery";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Category } from "@/types";
import useNewTaskQuery from "../Queries/newTaskQuery";


interface Task {
  name: string;
  description: string;
  category: number | string;
  date: string;
  priority: string;
}


function new_task() {
 
  const { data: newTask, loading: postingTask, handlePostTask } = useNewTaskQuery()
  const [category, setCategory] = useState<string>("")
  const today = toDateId(new Date());
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const { data, loading } = useGetCategory();
  const priority: string = selectedId === "1" ? "Normal" : selectedId === "2" ? "High" : selectedId === "3" ? "Medium" : "";
   const initialTaskState: Task = {
     name: "",
     description: "",
     category: 0,
     date: today,
     priority: "",
   };
  const [ task, setNewTask] = useState<Task>(initialTaskState);
  


  const handleChange = (name: string, value: string | number) => {
    setNewTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }


  const handleSubmit = async (data: Task) => {
   await handlePostTask(data)

    setNewTask(initialTaskState)
  }

console.log(task)


   const radioButtons = useMemo(
     () => [
       {
         id: "Normal", 
         label: "Normal",
         value: "Normal",
       },
       {
         id: "High",
         label: "High",
         value: "High",
       },
       {
        "id": "Medium",
        "label": "Medium",
        "value": "Medium"
       }
     ],
     []
   );


  return (
    <View style={[localStyles.container]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[localStyles.scroll_container]}
      >
        <TextInput
          placeholder="Task Title"
          onChangeText={(text) => handleChange("name", text)}
          style={[localStyles.input, globalStyles.shadow_small]}
          value={task.name}
        />
        <View style={[localStyles.cardContainer]}>
          <Text style={[globalStyles.title, localStyles.titleStyling]}>
            Category
          </Text>
          <View style={[localStyles.badgeContainer]}>
            {data?.map((cat: Category) => (
              <TouchableOpacity
                style={[
                  localStyles.badge,
                  task.category === cat.ID
                    ? localStyles.badgeActive
                    : localStyles.badgeInactive,
                ]}
                onPress={() => handleChange("category", cat.ID)}
                key={cat.ID}
              >
                <Text style={[localStyles.textColor]}>{cat.Name}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={[localStyles.perforatedBadge, localStyles.badgeInactive]}
            >
              <AntDesign name="plus" size={15} color="#FFFF" />
              <Text style={[localStyles.perforatedTextColor]}>New</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[localStyles.cardContainer]}>
          <Text style={[globalStyles.title, localStyles.titleStyling]}>
            Date
          </Text>
          <View>
            <Calendar
              calendarActiveDateRanges={[
                {
                  startId: task.date,
                  endId: task.date,
                },
              ]}
              calendarMonthId={today}
              onCalendarDayPress={(newDate) => handleChange("date", newDate)}
            />
          </View>
        </View>
        <TextInput
          placeholder="Description"
          style={[
            localStyles.inputLarge,
            globalStyles.shadow_small,
            { height: 100 },
          ]}
          onChangeText={(text) => handleChange("description", text)}
          multiline={true}
          value={task.description}
        />
        <View style={[localStyles.cardContainer]}>
          <Text style={[globalStyles.title, localStyles.titleStyling]}>
            Priority
          </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(priority) => handleChange("priority", priority)}
            selectedId={task.priority}
            containerStyle={{
              flexDirection: "row",
              gap: 20,
              marginTop: 10,
              borderColor: colors.primary,
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[localStyles.button]}
        onPress={() => handleSubmit(task)}
      >
        <AntDesign name="check-circle" size={24} color="#FFFF" />
        <Text style={localStyles.buttonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  scroll_container: {
    width: "100%",
    gap: 20,
  },

  cardContainer: {
    display: "flex",
    borderWidth: 2,
    borderColor: colors.slate,
    borderRadius: 10,
    padding: 10,
  },

  badgeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  input: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderBottomWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomColor: "#CCCCCC",
    marginTop: 20,
    paddingVertical: 15,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Manrope",
  },
  inputLarge: {
    height: 60,
    width: "100%",
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Manrope",
  },
  badge: {
    flexDirection: "row",
    gap: 5,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    color: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Manrope",
    width: "30%",
    height: 30,
  },

  badgeActive: {
    backgroundColor: colors.primary,
  },
  badgeInactive: {
    backgroundColor: colors.lightgray,
  },  

  textColor: {
    fontSize: 12,
    color: "#FFFF",
  },

  titleStyling: {
    fontSize: 15,
    color: colors.gray,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 15,
    width: "100%",
    // height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontSize: 76,
  },

  buttonText: {
    color: "#FFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Manrope",
  },

  perforatedBadge: {
    display: "flex",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFFF",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.lightgray,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 12,
    width: "30%",
    height: 30,
  },

  perforatedTextColor: {
    color: "#FFFF",
  },
});

export default new_task;
